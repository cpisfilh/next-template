import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { useQueryParams } from "@/hooks/use-query-params";
import { Filter, Columns, CirclePlus, Search } from "lucide-react";
import { useState } from "react";

export const ToolbarTable = () => {
  const { setParam, searchParams } = useQueryParams();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const onSearch = () => {
    const currentSearch = searchParams.get("search") ?? "";

    if (search.trim() === currentSearch.trim()) {
      return;
    }

    setParam("search", search.trim());
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center my-4 gap-4">
      <Label className="w-full sm:max-w-sm">
        <InputGroup>
          <InputGroupInput
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch();
            }}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="default" className="w-full" onClick={onSearch}>
              <Search />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Label>
      <div className="flex gap-2">
        <Button>
          <Filter />
        </Button>
        <Button>
          <Columns /> Columnas
        </Button>
        <Button className="bg-sidebar-primary text-sidebar-primary-foreground">
          <CirclePlus /> Crear
        </Button>
      </div>
    </div>
  );
};
