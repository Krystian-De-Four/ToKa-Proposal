import "./Articles.css";
 
export default function Articles() {
  return (
    <main className="articles-page">
      <h1>Articles</h1>
      <p>General gym tips, fitness guides and lifestyle reads, free for everyone.</p>
 
      <section className="articles-grid">
 
        <article className="article-card">
          <div className="article-image">Image coming soon</div>
          <p className="article-category">Gym Tips</p>
          <h2>Gym tip article title 1</h2>
          <p>Placeholder summary</p>
          <p>5 min read</p>
          <button type="button">Read more</button>
        </article>
 
        <article className="article-card">
          <div className="article-image">Image coming soon</div>
          <p className="article-category">Gym Tips</p>
          <h2>Gym tip article title 2</h2>
          <p>Placeholder summary</p>
          <p>4 min read</p>
          <button type="button">Read more</button>
        </article>
 
        <article className="article-card">
          <div className="article-image">Image coming soon</div>
          <p className="article-category">Fitness Guides</p>
          <h2>Fitness guide article title 1</h2>
          <p>Placeholder summary</p>
          <p>8 min read</p>
          <button type="button">Read more</button>
        </article>
 
        <article className="article-card">
          <div className="article-image">Image coming soon</div>
          <p className="article-category">Fitness Guides</p>
          <h2>Fitness guide article title 2</h2>
          <p>Placeholder summary</p>
          <p>6 min read</p>
          <button type="button">Read more</button>
        </article>
 
        <article className="article-card">
          <div className="article-image">Image coming soon</div>
          <p className="article-category">Lifestyle</p>
          <h2>Lifestyle article title 1</h2>
          <p>Placeholder summary</p>
          <p>3 min read</p>
          <button type="button">Read more</button>
        </article>
 
        <article className="article-card">
          <div className="article-image">Image coming soon</div>
          <p className="article-category">Lifestyle</p>
          <h2>Lifestyle article title 2</h2>
          <p>Placeholder summary</p>
          <p>5 min read</p>
          <button type="button">Read more</button>
        </article>
 
      </section>
    </main>
  );
}