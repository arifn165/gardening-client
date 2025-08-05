import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const sliderData = [
    {
      id: 1,
      title: "Summer Gardening Event",
      description: "Join our summer gardening workshop and learn new tips.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      buttonText: "Register Now",
      buttonLink: "/events/summer",
    },
    {
      id: 2,
      title: "Composting Basics",
      description: "Learn how to make your own compost at home.",
      image: "https://images.unsplash.com/photo-1447933608677-5f9d4b5183a3?auto=format&fit=crop&w=800&q=60",
      buttonText: "Read More",
      buttonLink: "/tips/composting-basics",
    },
    {
      id: 3,
      title: "Hydroponics Demo",
      description: "Discover the future of soil-less gardening.",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
      buttonText: "Join Demo",
      buttonLink: "/events/hydroponics-demo",
    },
  ];

  const [gardeners, setGardeners] = useState([]);

  const [tips, setTips] = useState([]);
 useEffect(() => {
    const fetchedGardeners = [
      {
        id: 1,
        name: "Alice Green",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        status: "active",
        experience: "5 years",
      },
      {
        id: 2,
        name: "Bob Garden",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        status: "active",
        experience: "3 years",
      },
      {
        id: 3,
        name: "Carol Bloom",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        status: "active",
        experience: "8 years",
      },
      {
        id: 4,
        name: "David Root",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        status: "active",
        experience: "6 years",
      },
      {
        id: 5,
        name: "Eva Leaf",
        image: "https://randomuser.me/api/portraits/women/20.jpg",
        status: "active",
        experience: "4 years",
      },
      {
        id: 6,
        name: "Frank Bloom",
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        status: "active",
        experience: "7 years",
      },
    ];
    setGardeners(fetchedGardeners);
    const fetchedTips = [
      {
        id: 1,
        title: "How to Grow Tomatoes Indoors",
        category: "Plant Care",
        image:
          "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 2,
        title: "Composting 101",
        category: "Composting",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        title: "Vertical Gardening Tips",
        category: "Vertical Gardening",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        title: "Hydroponics for Beginners",
        category: "Hydroponics",
        image:
          "https://images.unsplash.com/photo-1496610407110-2f2605ab6698?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        title: "Best Plants for Balcony Gardens",
        category: "Balcony Gardens",
        image:
          "https://images.unsplash.com/photo-1516707570265-8a8ec67b6d36?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 6,
        title: "Watering Tips for Succulents",
        category: "Plant Care",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
      },
    ];
    setTips(fetchedTips);
  }, []);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <Slider {...sliderSettings}>
          {sliderData.map((slide) => (
            <div key={slide.id} className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="mb-4 max-w-lg">{slide.description}</p>
                <a
                  href={slide.buttonLink}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-semibold"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Gardeners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gardeners.map((gardener) => (
            <div key={gardener.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
              <img
                src={gardener.image}
                alt={gardener.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{gardener.name}</h3>
              <p className="text-sm text-gray-600">{gardener.experience} experience</p>
              <p className="text-green-600 font-semibold mt-2">{gardener.status.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Top Trending Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div key={tip.id} className="bg-white rounded shadow overflow-hidden">
              <img src={tip.image} alt={tip.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{tip.title}</h3>
                <p className="text-sm text-gray-500">{tip.category}</p>
                <button
                  className="mt-2 text-green-600 font-semibold hover:underline"
                  onClick={() => alert(`See more about: ${tip.title}`)}
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12 bg-green-50 p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Gardening Tools You Need</h2>
        <p className="mb-2">
          Discover essential gardening tools to make your gardening easier and more enjoyable.
        </p>
        <ul className="list-disc list-inside">
          <li>Pruning Shears</li>
          <li>Watering Can</li>
          <li>Garden Trowel</li>
          <li>Gloves</li>
          <li>Soil Tester</li>
        </ul>
      </section>
      <section className="mb-12 bg-green-50 p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community Events</h2>
        <p>
          Participate in local gardening events and workshops to meet other enthusiasts and
          expand your skills.
        </p>
      </section>
    </div>
  );
};

export default Home;
