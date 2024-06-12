/** @jsxImportSource react */
import { Button } from "@/components/ui/button.jsx";
import { BsPlusCircle } from "react-icons/bs"
import { allproducts } from "./allproducts"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from "@/components/ui/context-menu"
import { cn } from "@/lib/utils"
export function ProductCard({
  product,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <img
              src={allproducts.model_image}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>
            <Button
            onClick={() => {
            }}>
            <BsPlusCircle className="mr-2 h-4 w-4" />
            Add to cart
          </Button></ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{allproducts.model_name}</h3>
        <p className="text-xs text-muted-foreground">{allproducts.model_number}</p>
      </div>
    </div>
  )
}
