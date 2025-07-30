// src/app/blog/[slug]/page.tsx

import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';

type BlogPost = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: {
    current: string;
  };
  author: {
    name: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  body: any;
};

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = groq`*[_type == "post"]{
    slug
  }`;

  const slugs: { slug: { current: string } }[] = await client.fetch(query);
  return slugs.map(post => ({
    slug: post.slug.current,
  }));
}

export default async function Page({ params }: PageProps) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      author -> {
        name
      },
      mainImage {
        asset -> {
          url
        }
      },
      body,
      slug
    }
  `;

  const post: BlogPost | null = await client.fetch(query, {
    slug: params.slug,
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-2">
        Published on {new Date(post._createdAt).toLocaleDateString()} by {post.author?.name}
      </p>
      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="w-full h-auto rounded mb-6"
        />
      )}
      <div>
        {/* You can replace this with PortableText rendering if needed */}
        <pre>{JSON.stringify(post.body, null, 2)}</pre>
      </div>
    </article>
  );
}
