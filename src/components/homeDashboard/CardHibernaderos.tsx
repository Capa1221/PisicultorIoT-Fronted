import { Button, Card, CardBody, Image } from "@nextui-org/react";

interface CardHibernaderosProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  tracksInfo: string;
  timeStart: string;
  timeEnd: string;
}

export const CardHibernaderos = ({
  imageUrl,
  title,
  subtitle,
  description,
  tracksInfo,
  timeStart,
  timeEnd,
}: CardHibernaderosProps) => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt={title}
              className="object-cover"
              height={200}
              shadow="md"
              src={imageUrl}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">{title}</h3>
                <p className="text-small text-foreground/80">{tracksInfo}</p>
                <h1 className="text-large font-medium mt-2">{subtitle}</h1>
                <p>{description}</p>
              </div>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <div className="flex justify-between">
                <p className="text-small">{timeStart}</p>
                <p className="text-small text-foreground/50">{timeEnd}</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
