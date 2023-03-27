import { CardContent, CardMedia, Typography } from "@mui/material";
import { Character } from "./Character";
import Image from "next/image";
import { CharacterProp } from "@/pages/[id]";

interface Props {
  character: CharacterProp;
}

const SingleCharacter = ({ character }: Props) => (
  <Character
    characterImage={
      <CardMedia>
        <Image
          src={character.image!}
          alt={character.name}
          height={210}
          width={250}
        />
      </CardMedia>
    }
    characterBody={
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Gender - {character.gender}
        </Typography>
        <hr />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ pt: "0.313rem", pb: "0.313rem" }}
        >
          Location - {character.location.name}
        </Typography>
        <hr />
        <Typography variant="body1" color="text.secondary">
          Dimension - {character.location.dimension}
        </Typography>
      </CardContent>
    }
  />
);

export default SingleCharacter;
