import { Box, Card, Stack } from "@twilio-paste/core";
import Link from "next/link";
import Image from "next/image";
export default function Product({ product, discount }) {
  return (
    <>
      <Box padding="space10" textAlign="center">
        <Stack orientation="vertical" element="PRODUCT">
          <p>
            <Link href={"/products/" + product.id}>
              <Image
                src={product.image}
                alt={product.name}
                height="424"
                width="257"
              />
            </Link>
          </p>
          <div className="view-product">
            <Link href={"/products/" + product.id}>View Product</Link>
          </div>
        </Stack>
      </Box>
    </>
  );
}
