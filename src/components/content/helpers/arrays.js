const createIcon = (id, src) => {
  return {
    id: id,
    src: src,
  };
};

const icons = [
  createIcon(
    1,
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
  ),
  createIcon(
    2,
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  ),
  createIcon(
    3,
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  ),
  createIcon(
    4,
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'
  ),
  createIcon(
    5,
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg'
  ),
];

export default icons;
