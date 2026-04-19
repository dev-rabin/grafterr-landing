export const fetchHeroContent = () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch("/data/content.json");
        console.log(res);

        const data = await res.json();
        resolve(data.hero);
      } catch (err) {
        reject(err);
      }
    }, 1200);
  });
};

export const fetchFeaturesContent = () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch("/data/content.json");
        const data = await res.json();
        resolve(data.features);
      } catch (err) {
        reject(err);
      }
    }, 1200);
  });
};
