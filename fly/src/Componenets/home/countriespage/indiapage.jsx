import React from 'react';

function IndiaInformation() {
  return (
    <div>
      <h2 style={{textAlign: 'center', fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif'}}>
        INDIA
      </h2>
      <div style={{
        maxWidth: '800px',
        margin: '20px auto',
        color: 'dimgray',
        padding: '20px',
        border: '1px solid burlywood',
        borderRadius: '10px',
        borderWidth: 'medium',
        overflow: 'hidden',
        backgroundColor: 'bisque'
      }}>
        <div style={{float: 'left', margin: '0 15px 10px 0'}}>
          <img
            src="https://static01.nyt.com/images/2021/08/31/business/31india-econ-1/31india-econ-1-superJumbo-v2.jpg"
            alt="India"
            width="200"
          />
        </div>
        <p>
          India, officially the Republic of India, is a country in South Asia. It
          is the seventh-largest country by land area, the second-most populous
          country, and the most populous democracy in the world. Bounded by the
          Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay
          of Bengal on the southeast, it shares land borders with Pakistan to the
          west; China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar
          to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka
          and the Maldives; its Andaman and Nicobar Islands share a maritime
          border with Thailand, Myanmar, and Indonesia.
        </p>
        <div style={{float: 'right', margin: '0 0 15px 10px'}}>
          <img
            src="https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200"
            alt="Taj Mahal"
            width="200"
          />
        </div>
        <p>
          India has a rich cultural heritage and is known for its diverse culture,
          languages, traditions, and festivals. It is home to various historical
          landmarks such as the Taj Mahal, Qutub Minar, Red Fort, and many more.
          The Taj Mahal, a UNESCO World Heritage Site, is one of the most iconic
          symbols of India and is considered one of the New Seven Wonders of the
          World.
        </p>
        <div style={{float: 'left', margin: '0 15px 10px 0'}}>
          <img
            src="https://cdn.britannica.com/67/156667-050-62285333/Lotus-Temple-New-Delhi-India.jpg"
            alt="Lotus temple"
            width="200"
          />
        </div>
        <p>
          One of the remarkable features of India is its architectural diversity,
          from ancient temples to modern skyscrapers. The Lotus Temple in Delhi is
          an architectural marvel known for its distinctive lotus-like shape and
          serves as a prominent place of worship for people of all religions.
        </p>
      </div>
    </div>
  );
}

export default IndiaInformation;

