'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { loginSchema } from "@/modules/auth/schemas/loginSchema"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authClient } from "@/lib/auth-client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"

type Schema = z.infer<typeof loginSchema>

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<Schema>({
      resolver: zodResolver(loginSchema),
    })

  const router = useRouter()

  const onSubmit = async (data: Schema) => {
    setIsLoading(true)

    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
    })

    setIsLoading(false)

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success("Bienvenido")
    router.push("/admin/dashboard")
  }

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <Card className="px-5 py-8">
        <CardHeader className="text-center mb-4">
          <CardTitle className="text-2xl font-bold">Inicia sesión en tu cuenta</CardTitle>
          <CardDescription>
            Introduce tu correo electrónico a continuación para iniciar sesión en tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                </div>
                <Input id="password" type="password" {...register("password")} />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </Field>
              <Field>
                <Button disabled={isLoading} type="submit">{
                  isLoading ? <span className="flex items-center gap-2"> <Spinner/> Ingresando...</span> : "Iniciar sesión"
                  }</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
