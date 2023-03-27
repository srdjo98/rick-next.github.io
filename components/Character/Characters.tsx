import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Character } from "./Character";
import Link from "next/link";
import Image from "next/image";
import { CharactersProp } from "@/pages";

interface Props {
  characters: CharactersProp[];
}

const Characters = ({ characters }: Props) => {
  return (
    <>
      {characters.map((c: CharactersProp) => (
        <Character
          key={c.id}
          characterImage={
            <CardMedia>
              <Image src={c.image!} alt={c.name} height={210} width={250} />
            </CardMedia>
          }
          characterBody={
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {c.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {c.status} - {c.species}
              </Typography>
            </CardContent>
          }
          characterActions={
            <CardActions>
              <Link href={`/${c.id}`}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "#728C69",
                    "&:hover": {
                      bgcolor: "#B2D3C2",
                      color: "black",
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ pt: "0.125rem" }}>
                    Explore Character
                  </Typography>
                </Button>
              </Link>
            </CardActions>
          }
        />
      ))}
    </>
  );
};
export default Characters;
