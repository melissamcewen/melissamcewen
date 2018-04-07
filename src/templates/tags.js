import React from 'react';
import GatsbyLink from 'gatsby-link';



export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <div>
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <ul>
          {post.map(({ id, frontmatter, excerpt, fields }) => {
            return (
              <li key={id}>
                  <GatsbyLink to={fields.slug}>
                    {frontmatter.title} {frontmatter.url} MEOW
                  </GatsbyLink>
                <p>
                  {excerpt}
                </p>
              </li>
            );
          })}
        </ul>
        <GatsbyLink to="/tags">
          All tags
        </GatsbyLink>
      </div>
    );
  }
  console.log("meow");
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => {
          const tags = posts[tagName];
          return (
            <li key={tagName}>
              <GatsbyLink to={`/tags/${tagName}`}>
                {tagName}
              </GatsbyLink>
            </li>
          );
        })}
      </ul>
      <GatsbyLink to="/">
        All posts
      </GatsbyLink>
    </div>
  );
}