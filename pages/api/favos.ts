import { NextApiRequest, NextApiResponse } from 'next';
import { insertFavo } from '../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const favoDogs = {
    favoName: req.body.favoName,
    lifeSpan: req.body.lifeSpan,
    breedGroup: req.body.breedGroup,
    temperament: req.body.temperament,
    url: req.body.url,
    dogId: req.body.dogId,
  };

  if (req.body) {
    insertFavo(
      favoDogs.favoName,
      favoDogs.lifeSpan,
      favoDogs.breedGroup,
      favoDogs.temperament,
      favoDogs.url,
      favoDogs.dogId,
    )
      .then(() => console.log('FAVO DOG SAVED'))
      .catch((err) => console.error('SAVE ERROR: ', err));
  } else {
    console.log('NO FAVOS TO SAVE');
  }
  res.json({ favoDogs });
  console.log('Api-favos-FAVODOGS: ', favoDogs);
};
