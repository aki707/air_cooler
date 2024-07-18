"use client";

import * as React from "react";
import { useCart } from "../ui/cart-context";
//import { CartItem, Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import Item from "./Item";

function CartItem({ item }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative h-16 w-16 overflow-hidden rounded">
        {/* <Image
          src={item.product.image}
          alt={item.product.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="absolute object-cover"
          loading="lazy"
        /> */}
        <img src="item.png" alt="img "/>
      </div>
      <div className="flex flex-1 flex-col gap-1 self-start text-sm">
        {/* <span className="line-clamp-1">{item.product.title}</span> */}
        <span className="line-clamp-1">item.product.title</span>
        {/* <span className="line-clamp-1 text-muted-foreground">
          {formatPrice(item.product.price)} x {item.quantity} ={" "}
          {formatPrice(item.product.price * item.quantity)}
        </span> */}
        <span className="line-clamp-1 text-muted-foreground">
          item.product.price x item.quantity =hgd
        </span>
        {/* <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
          {item.product.category}
        </span> */}
        <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
          item.product.category
        </span>
      </div>
      {/* <Item item={item} /> */}
    </div>
  );
}

export default CartItem;

