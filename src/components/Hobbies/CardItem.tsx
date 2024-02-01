import { Card, CardContent, CardHeader } from "@material-ui/core";
import { PropsWithChildren } from "react";

interface CardItemProps {
  title: string;
  subheader: string;
  children: string | JSX.Element | JSX.Element[];
}

export default function CardItem({
  title,
  subheader,
  children,
}: PropsWithChildren<CardItemProps>) {
  return (
    <Card variant="elevation">
      <CardHeader
        title={title}
        titleTypographyProps={{
          align: "center",
          color: "primary",
          gutterBottom: true,
        }}
        subheader={subheader}
        subheaderTypographyProps={{ variant: "body2", align: "center" }}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
}
