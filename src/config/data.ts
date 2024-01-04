import Post from "@/models/Post";

export const fakePosts: Post[] = [
  {
    id: 1,
    image: '/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg',
    title: 'Comment devenir développeur Laravel PHP et React JS ?',
    author: {
      fullName: 'Franck Tiomela',
      email: 'francktiomela12@gmail.com',
      picture: '/images/tania-mousinho-R_rszdPOoZk-unsplash.jpg'
    },
    created_at: '12 Fev 2023',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    like: 10,
    tags: [
      {
        created_ad: '01 Sep 2022',
        name: 'Laravel'
      },
      {
        created_ad: '01 Sep 2022',
        name: 'React JS'
      }
    ],
  },
  {
    id: 2,
    image: '/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg',
    title: 'Les meilleures pratiques pour développer en React',
    author: {
      fullName: 'Alice Dupont',
      email: 'alice.dupont@example.com',
      picture: '/images/tania-mousinho-R_rszdPOoZk-unsplash.jpg'
    },
    created_at: '15 Jan 2023',
    description: 'Conseils et astuces pour améliorer votre développement React.',
    like: 15,
    tags: [
      {
        created_ad: '05 Oct 2022',
        name: 'React'
      },
      {
        created_ad: '05 Oct 2022',
        name: 'JavaScript'
      }
    ],
  },
  {
    id: 3,
    image: '/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg',
    title: 'Introduction à PHP : Les bases essentielles',
    author: {
      fullName: 'Sophie Martin',
      email: 'sophie.martin@example.com',
      picture: '/images/tania-mousinho-R_rszdPOoZk-unsplash.jpg'
    },
    created_at: '20 Avr 2023',
    description: 'Découvrez les fondamentaux de la programmation en PHP.',
    like: 8,
    tags: [
      {
        created_ad: '10 Jan 2023',
        name: 'PHP'
      },
      {
        created_ad: '10 Jan 2023',
        name: 'Développement Web'
      }
    ],
  },
  {
    id: 4,
    image: '/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg',
    title: 'Construire des applications avec Vue.js',
    author: {
      fullName: 'Martin Dupuis',
      email: 'martin.dupuis@example.com',
      picture: '/images/tania-mousinho-R_rszdPOoZk-unsplash.jpg'
    },
    created_at: '25 Mars 2023',
    description: 'Guide pratique pour développer des applications avec Vue.js.',
    like: 12,
    tags: [
      {
        created_ad: '15 Fév 2023',
        name: 'Vue.js'
      },
      {
        created_ad: '15 Fév 2023',
        name: 'JavaScript'
      }
    ],
  },
  {
    id: 5,
    image: '/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg',
    title: 'Les secrets d\'une gestion efficace du temps en programmation',
    author: {
      fullName: 'Marie Leclerc',
      email: 'marie.leclerc@example.com',
      picture: '/images/tania-mousinho-R_rszdPOoZk-unsplash.jpg'
    },
    created_at: '02 Juin 2023',
    description: 'Conseils pratiques pour maximiser votre productivité en tant que développeur.',
    like: 20,
    tags: [
      {
        created_ad: '01 Avr 2023',
        name: 'Productivité'
      },
      {
        created_ad: '01 Avr 2023',
        name: 'Gestion du temps'
      }
    ],
  },
];
