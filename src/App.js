import './App.css';
import Hexagram from './Hexagram';
import Card from './Card';

function App() {
  const tags = ["fluffy", "rex", "chiko", "ming"];

  function handleTagClick($event) {
    console.log('handleTagClick in App.js: ', $event)
  }

  return (
    <div>
      <twds-card
        card-image-url="https://source.unsplash.com/oul9SXW4pHk/384x234"
        card-image-alt="Ladakh mountains"
        card-title="What will the future hold?"
        card-text="If you obsess over whether you are making the right decision, you are basically assuming that the universe will reward you for one thing and punish you for another.">        
      </twds-card>

      <Card
        cardImageUrl="https://source.unsplash.com/random/384x234"
        cardImageAlt="Random image"
        cardTitle="Random image title"
        cardText="Random image description"
        cardTags={tags}
        tagClick={handleTagClick}
      >
      </Card>

      <twds-hexagram lines="111111"></twds-hexagram>

      <Hexagram lines="010101">hello</Hexagram>

    </div>
  );
}

export default App;
