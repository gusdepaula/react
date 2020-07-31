import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoryRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        setDadosIniciais(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
