"use server";
import db from "@/db";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

export async function getLatestProducts() {
  const data = await db.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}


export async function getProductBySlug(slug:string){
    return await  db.product.findFirst({
        where:{slug:slug}
    })
}