import { Box, Card, Stack } from "@twilio-paste/core";
import Link from "next/link";
import { Theme } from "@twilio-paste/core/theme";
export default function Product({ product, discount }) {
  return (
    <>
      <Box padding="space10" textAlign="center">
        <Stack orientation="vertical" element="PRODUCT">
          <p>
            <Link href={"/products/" + product.id}>
              <img src={product.image} alt={product.name} />
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
