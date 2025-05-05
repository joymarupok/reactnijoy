import { useState } from 'react';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  
  const blogs = [
    {
      id: 1,
      title: "Day 1: Touchdown and City Tour",
      date: "April 7, 2025",
      summary: "Our first day exploring Manila's historical and cultural landmarks",
      content: "We landed in Manila via Cebu Pacific, full of excitement and anticipation. After lunch at DJM Dormitory, we kicked off with a city tour that took us through the heart of Manila's history (Intramuros, Fort Santiago, Rizal Park, Manila Cathedral, and the majestic San Agustin Church). The cultural immersion continued at the Cultural Center of the Philippines (CCP) and the sprawling Mall of Asia. We ended the day with dinner back at the dorm, still buzzing from the day's discoveries.",
      images: [
        "day7/day7 (1).jpeg", 
        "day7/day7 (2).jpeg", 
        "day7/day7 (3).jpeg",
        "day7/day7 (4).jpeg",
        "day7/day7 (5).jpeg",
        "day7/day7 (6).jpeg"
      ]
    },
    {
      id: 2,
      title: "Day 2: A Glimpse of Discipline and Order",
      date: "April 8, 2025",
      summary: "Visiting Subic Bay and learning about law enforcement systems",
      content: "After breakfast, we traveled to Subic, Olongapo, where we visited the SBMA Law Enforcement Department – Communication Management System. It was a fascinating look into the structure and operations that help maintain peace and order. The day wrapped up with another cozy dinner at DJM Dormitory.",
      images: [
        "day2/day2 (1).jpeg", 
        "day2/day2 (2).jpeg", 
        "day2/day2 (3).jpeg",
        "day2/day2 (4).jpeg",
        "day2/day2 (5).jpeg",
        "day2/day2 (6).jpeg"
      ]
    },
    {
      id: 3,
      title: "Day 3: Honoring History and Nature",
      date: "April 9, 2025",
      summary: "Exploring museums and learning about Philippine heritage",
      content: "This day was all about learning from the past and admiring the present. We visited the Museo ni Manuel Quezon, learning about the life and legacy of one of our country's greatest leaders. Then we explored the National Museum of Natural History, where nature's wonders were brought to life. Another insightful day ended with a hearty dinner at DJM.",
      images: [
        "day3/day3 (1).jpeg", 
        "day3/day3 (2).jpeg", 
        "day3/day3 (3).jpeg",
        "day3/day3 (4).jpeg",
        "day3/day3 (5).jpeg",
        "day3/day3 (6).jpeg"
      ]
    },
    {
      id: 4,
      title: "Day 4: Bangko Sentral ng Pilipinas (BSP)",
      date: "April 10, 2025",
      summary: "Learning about financial systems and technology",
      content: "We started the day at the Bangko Sentral ng Pilipinas (BSP), a rare and enlightening opportunity to see how the country's financial systems work. After lunch, we headed to Novaliches to tour Hytec Power Inc., a company making strides in technology and energy. A quick tour at Trinoma Mall gave us a bit of leisure before ending the day with dinner at the dorm.",
      images: [
        "day4/day4 (1).jpeg", 
        "day4/day4 (2).jpeg", 
        "day4/day4 (3).jpeg",
        "day4/day4 (4).jpeg",
        "day4/day4 (5).jpeg",
        "day4/day4 (6).jpeg"
      ]
    },
    {
      id: 5,
      title: "Day 5: Transit and Traffic Systems",
      date: "April 11, 2025",
      summary: "Exploring transportation and traffic management in Manila",
      content: "Today we explored transportation systems. Our first stop was the Light Rail Transit Authority Line 2, where we got an inside look at metro operations. After lunch, we visited the Traffic Engineering Center, deepening our understanding of how traffic is monitored and managed in a busy city like Manila. As always, we ended the day with a fulfilling dinner at DJM.",
      images: [
        "day5/day5 (1).jpeg", 
        "day5/day5 (2).jpeg", 
        "day5/day5 (3).jpeg",
        "day5/day5 (4).jpeg",
        "day5/day5 (5).jpeg",
        "day5/day5 (6).jpeg"
      ]
    },
    {
      id: 6,
      title: "Day 6: Baguio's Cool Charm",
      date: "April 12, 2025",
      summary: "Traveling to and exploring the summer capital of the Philippines",
      content: "Our day began at 1 AM as we traveled to the summer capital of the Philippines \"Baguio City\". We visited the beautiful Strawberry Farm and peaceful Chinese Bell Church, then checked in at Prince Plaza Hotel for breakfast and a short rest. Later, we explored the Philippine Military Academy, a symbol of discipline and service. After lunch, we enjoyed iconic tourist spots like Mines View Park and The Mansion House. It was a day full of fresh air, stunning views, and new experiences—capped with a return to DJM Dormitory for dinner.",
      images: [
        "day6/day6 (1).jpeg", 
        "day6/day6 (2).jpeg", 
        "day6/day6 (3).jpeg",
        "day6/day6 (4).jpeg",
        "day6/day6 (5).jpeg",
        "day6/day6 (6).jpeg"
      ]
    },
    {
      id: 7,
      title: "Day 7: The Final Day",
      date: "April 13, 2025",
      summary: "Reflection and return journey from our educational tour",
      content: "Our last day was a free day in Baguio. While others went out to explore more, I stayed in the hotel, taking time to relax and reflect. By noon, we packed up and began our journey back to Quezon City. Though the trip had come to an end, the memories we made were lasting.",
      images: [
        "day1/day1 (1).jpeg", 
        "day1/day1 (2).jpeg", 
        "day1/day1 (3).jpeg",
        "day1/day1 (4).jpeg",
        "day1/day1 (5).jpeg",
        "day1/day1 (6).jpeg"
      ]
    }
  ];

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  return (
    <section className="blog">
      <h2 className="section-title">My Blog</h2>
      
      {selectedBlog ? (
        <div className="blog-post">
          <button className="back-btn" onClick={handleBack}>
            &larr; Back to all posts
          </button>
          <h3 className="blog-post-title">{selectedBlog.title}</h3>
          <span className="blog-post-date">{selectedBlog.date}</span>
          
          <div className="blog-post-images">
            {selectedBlog.images.map((image, index) => (
              <div className="blog-image-container" key={index}>
                <img 
                  src={image} 
                  alt={`Blog post ${selectedBlog.id} image ${index + 1}`} 
                  className="blog-post-image"
                />
              </div>
            ))}
          </div>
          
          <p className="blog-post-content">{selectedBlog.content}</p>
        </div>
      ) : (
        <div className="blog-grid">
          {blogs.map(blog => (
            <div 
              className="blog-card" 
              key={blog.id}
              onClick={() => handleBlogClick(blog)}
            >
              <div className="blog-card-image">
                <img src={blog.images[0]} alt={blog.title} />
              </div>
              <div className="blog-card-content">
                <span className="blog-date">{blog.date}</span>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-summary">{blog.summary}</p>
                <span className="read-more">Read more &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
