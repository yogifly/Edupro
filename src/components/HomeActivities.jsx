import React from 'react';

const HomeActivities = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#e8f0fe', margin: 0, padding: 0 }}>
      <br />
      <header>
  <div className="headerContainer" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
    <img
      src="images/360_F_91469952_ZThAYcO8L6IjoT2M1tvyKBNR8ivvMEEm.jpg"
      alt="Top Banner"
      style={{ width: '100%', height: '200px', objectFit: 'cover', filter: 'brightness(0.7)' }} // Adjust height here
    />
    <div
      className="headerOverlay"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '2em', // Adjust font size if needed
        fontWeight: 'bold',
        color: '#ffffff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      Home-Based Activities for Effective Parenting
    </div>
  </div>
</header>


      {/* Introduction Section */}
      <section
        className="introSection"
        style={{
          textAlign: 'center',
          margin: '40px auto',
          maxWidth: '800px',
          padding: '20px',
          backgroundColor: '#f0f4ff',
          borderRadius: '15px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p className="introText" style={{ fontSize: '1.3em', color: '#333' }}>
          Discover creative and engaging activities you can do with your children at home to promote growth, learning, and stronger bonds. These activities foster emotional, cognitive, and physical development while spending quality time together.
        </p>
      </section>

      {/* Activities Section */}
      <section
        className="activitiesContainer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '0 auto',
          maxWidth: '1200px',
          padding: '20px',
        }}
      >
        {[
          [
            {
              title: '1. Reading Together',
              description:
                'Spend time reading with your child daily. This helps improve language skills, builds imagination, and fosters a love for books.',
              image: 'images/reading book.jpg',
              alt: 'Reading Activity',
            },
            {
              title: '2. Arts and Crafts',
              description:
                'Engage in creative projects like drawing and crafting. It enhances motor skills, creativity, and allows children to express themselves.',
              image: 'images/arts and crafts.jpg',
              alt: 'Arts and Crafts',
            },
          ],
          [
            {
              title: '3. Cooking or Baking',
              description:
                'Involve your child in simple cooking tasks, teaching them math, responsibility, and safety while having fun in the kitchen.',
              image: 'images/cooking and baking.jpg',
              alt: 'Cooking Activity',
            },
            {
              title: '4. Gardening',
              description:
                'Teach kids about nature by planting flowers or vegetables. It fosters responsibility, patience, and helps them learn about the environment.',
              image: 'images/Gardening_with_Family_.jpg',
              alt: 'Gardening Activity',
            },
          ],
          [
            {
              title: '5. Board Games and Puzzles',
              description:
                'Playing games and solving puzzles helps children develop critical thinking and problem-solving skills while having fun.',
              image: 'images/Board Games and Puzzles.jpg',
              alt: 'Board Games',
            },
            {
              title: '6. Exercise and Outdoor Play',
              description:
                'Encourage physical activities like playing catch, going for a walk, or riding bikes to boost physical development and healthy habits.',
              image: 'images/Exercise and Outdoor Play.jpg',
              alt: 'Exercise',
            },
          ],
          [
            {
              title: '7. Homework Support',
              description:
                'Be actively involved in your child’s homework to help them understand their lessons and encourage a love for learning.',
              image: 'images/Homework Support.jpg',
              alt: 'Homework Support',
            },
            {
              title: '8. Storytelling and Family Conversations',
              description:
                'Share stories from your childhood or make up new ones to improve language skills and imagination, while building a strong bond.',
              image: 'images/Storytelling and Family Conversation.webp',
              alt: 'Storytelling',
            },
          ],
          [
            {
              title: '9. Music and Dance',
              description:
                'Listening to music or dancing together helps develop rhythm and coordination, while creating fun and lasting memories.',
              image: 'images/music and dance.webp',
              alt: 'Music',
            },
            {
              title: '10. Building Emotional Connections',
              description:
                'Have regular one-on-one talks with your child, asking about their day, feelings, and thoughts. Active listening builds a strong emotional connection and encourages open communication.',
              image: 'images/Building Emotional Connections.jpg',
              alt: 'Emotional Connections',
            },
          ],
        ].map((row, rowIndex) => (
          <div
            className="activityRow"
            key={rowIndex}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '40px',
              padding: '20px',
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)',
            }}
          >
            {row.map((activity, index) => (
              <div
                className="activityCard"
                key={index}
                style={{
                  padding: '15px',
                  width: '45%',
                  textAlign: 'center',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '10px',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <h3 className="activityTitle" style={{ fontSize: '1.6em', color: '#333', marginBottom: '10px' }}>{activity.title}</h3>
                <p className="activityDescription" style={{ fontSize: '1em', color: '#555', marginBottom: '20px' }}>
                  {activity.description}
                </p>
                <img
                  src={activity.image}
                  alt={activity.alt}
                  className="activityImage"
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
                />
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeActivities;
