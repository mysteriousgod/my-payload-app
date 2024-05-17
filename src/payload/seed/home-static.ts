import type { Page } from '../payload-types'

export const staticHome: Page = {
  id: '',
  title: 'Home',
  slug: 'home',
  createdAt: '',
  updatedAt: '',
  meta: {
    title: 'Talli Wears',
    description: 'Clothing & Styling',
  },
  hero: {
    type: 'lowImpact',
    richText: [
      {
        children: [
          {
            text: 'Tlli Wears: Elevate Your Style with Trendy Clothing',
          },
        ],
        type: 'h1',
      },
      {
        children: [
          {
            text:  "Welcome to Tlli Wears, your ultimate destination for fashionable clothing that reflects your individuality and keeps you ahead of the style curve. Our curated collection boasts a diverse range of trendy garments designed to cater to your fashion needs for every occasion. Dive into our selection of chic dresses, ranging from casual day dresses to elegant evening gowns, perfect for making a statement wherever you go. Whether you're attending a cocktail party or a casual brunch with friends, we have the perfect dress to match your vibe. Elevate your everyday look with our stylish tops, featuring on-trend designs and flattering silhouettes. From classic basics to fashion-forward statement pieces, our tops are crafted to enhance your personal style effortlessly.",
          },
          // {
          //   text: 'Your database is currently empty.',
          //   bold: true,
          // },
          // {
          //   text: ' To seed your database with a few products and pages, ',
          // },
          // {
          //   type: 'link',
          //   linkType: 'custom',
          //   url: '/admin',
          //   children: [
          //     {
          //       text: 'log in to the admin dashboard',
          //     },
          //   ],
          // },
          // {
          //   text: ' and click "seed your database". If you have already seeded your database, ',
          // },
          // {
          //   text: 'you may need to hard refresh this page to clear the cached request.',
          //   bold: true,
          // },
        ],
      },
      // {
      //   children: [
      //     {
      //       text: 'The code for this template is completely open-source and can be found ',
      //     },
      //     {
      //       type: 'link',
      //       linkType: 'custom',
      //       url: 'https://github.com/payloadcms/payload/tree/main/templates/ecommerce',
      //       newTab: true,
      //       children: [
      //         {
      //           text: 'here',
      //         },
      //       ],
      //     },
      //     {
      //       text: '.',
      //     },
      //   ],
      // },
    ],
    media: '',
  },
  layout: [
    {
      richText: [
        {
          children: [
            {
              text: 'You do not have any account login',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'to buy product to continue to ',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/create-account',
              children: [
                {
                  text: 'create account',
                },
              ],
            },
            {
              text: ' or just login',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'custom',
            url: '/login',
            label: 'Login an account',
            appearance: 'primary',
            reference: null,
          },
        },
      ],
      blockName: 'CTA',
      blockType: 'cta',
    },
  ],
}
