const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(`${entry.target.id} 지금 보임`);
    }
  });
};

const options = {
  threshold: 1.0,
};

export const observer = new IntersectionObserver(callback, options);

export const test = 1;
