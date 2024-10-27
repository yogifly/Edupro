import React from 'react';
import './HomeActivities.css';

const HomeActivities = () => {
  return (
    <div><br></br>
    <br></br><br></br>
    <br></br>
    <br></br><br></br>
    <br></br>
    <br></br><br></br>
    <br></br>
    <br></br><br></br>
    <br></br>
    <br></br><br></br>
    <br></br>
    <br></br><br></br>
    <br></br>
    <br></br><br></br>
    <br></br>
    <br></br><br></br>
      {/* Header Section with Image and Heading */}
      <header>
        <div className="header-image">
          <img
            src="images/360_F_91469952_ZThAYcO8L6IjoT2M1tvyKBNR8ivvMEEm.jpg"
            alt="Top Banner"
            style={{ width: '1550px', height: '400px' }}
          />
          <div className="heading-overlay">
            <h1>Home-Based Activities for Effective Parenting</h1>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro">
        <p>
          Discover creative and engaging activities you can do with your children at home to promote growth, learning, and stronger bonds. These activities foster emotional, cognitive, and physical development while spending quality time together.
        </p>
      </section>

      {/* Activities Section */}
      <section className="activities">
        <div className="activity-row">
          <div className="activity">
            <h3>1. Reading Together</h3>
            <p>
              Spend time reading with your child daily. This helps improve language skills, builds imagination, and fosters a love for books.
            </p>
            <img src="images/reading book.jpg" alt="Reading Activity" />
          </div>
          <div className="activity">
            <h3>2. Arts and Crafts</h3>
            <p>
              Engage in creative projects like drawing and crafting. It enhances motor skills, creativity, and allows children to express themselves.
            </p>
            <img src="images/arts and crafts.jpg" alt="Arts and Crafts" />
          </div>
        </div>

        <div className="activity-row">
          <div className="activity">
            <h3>3. Cooking or Baking</h3>
            <p>
              Involve your child in simple cooking tasks, teaching them math, responsibility, and safety while having fun in the kitchen.
            </p>
            <img src="images/cooking and baking.jpg" alt="Cooking Activity" />
          </div>
          <div className="activity">
            <h3>4. Gardening</h3>
            <p>
              Teach kids about nature by planting flowers or vegetables. It fosters responsibility, patience, and helps them learn about the environment.
            </p>
            <img src="images/Gardening_with_Family_.jpg" alt="Gardening Activity" />
          </div>
        </div>

        <div className="activity-row">
          <div className="activity">
            <h3>5. Board Games and Puzzles</h3>
            <p>
              Playing games and solving puzzles helps children develop critical thinking and problem-solving skills while having fun.
            </p>
            <img src="images/Board Games and Puzzles.jpg" alt="Board Games" />
          </div>
          <div className="activity">
            <h3>6. Exercise and Outdoor Play</h3>
            <p>
              Encourage physical activities like playing catch, going for a walk, or riding bikes to boost physical development and healthy habits.
            </p>
            <img src="images/Exercise and Outdoor Play.jpg" alt="Exercise" />
          </div>
        </div>

        <div className="activity-row">
          <div className="activity">
            <h3>7. Homework Support</h3>
            <p>
              Be actively involved in your child’s homework to help them understand their lessons and encourage a love for learning.
            </p>
            <img src="images/Homework Support.jpg" alt="Homework Support" />
          </div>
          <div className="activity">
            <h3>8. Storytelling and Family Conversations</h3>
            <p>
              Share stories from your childhood or make up new ones to improve language skills and imagination, while building a strong bond.
            </p>
            <img src="images/Storytelling and Family Conversation.webp" alt="Storytelling" />
          </div>
        </div>

        <div className="activity-row">
          <div className="activity">
            <h3>9. Music and Dance</h3>
            <p>
              Listening to music or dancing together helps develop rhythm and coordination, while creating fun and lasting memories.
            </p>
            <img src="images/music and dance.webp" alt="Music" />
          </div>
          <div className="activity">
            <h3>10. Building Emotional Connections</h3>
            <p>
              Have regular one-on-one talks with your child, asking about their day, feelings, and thoughts. Active listening builds a strong emotional connection and encourages open communication.
            </p>
            <img src="images/Building Emotional Connections.jpg" alt="Emotional Connections" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeActivities;
