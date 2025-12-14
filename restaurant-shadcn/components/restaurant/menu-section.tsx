import { MenuCard } from "./menu-card";

const menuCategories = [
  {
    title: "Kebabs",
    items: [
      {
        name: "Chicken Kebab",
        description: "Tender marinated chicken, grilled to perfection",
        price: "$14.99",
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400",
      },
      {
        name: "Lamb Kebab",
        description: "Premium lamb with Mediterranean spices",
        price: "$17.99",
        image:
          "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400",
        badge: "Popular",
      },
      {
        name: "Mixed Grill",
        description: "Combination of chicken, lamb and beef",
        price: "$21.99",
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
        badge: "Chef's Pick",
      },
      {
        name: "Veggie Kebab",
        description: "Grilled seasonal vegetables with herbs",
        price: "$12.99",
        image:
          "https://images.unsplash.com/photo-1540914124281-342587941389?w=400",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      {
        name: "Hummus",
        description: "Creamy chickpea dip with olive oil",
        price: "$6.99",
        image:
          "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400",
      },
      {
        name: "Falafel",
        description: "Crispy herb-spiced chickpea fritters",
        price: "$7.99",
        image:
          "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?w=400",
      },
      {
        name: "Rice Pilaf",
        description: "Fluffy basmati rice with herbs",
        price: "$4.99",
        image:
          "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400",
      },
      {
        name: "Grilled Veggies",
        description: "Seasonal vegetables, chargrilled",
        price: "$5.99",
        image:
          "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Turkish Tea",
        description: "Traditional black tea served hot",
        price: "$3.49",
        image:
          "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400",
      },
      {
        name: "Ayran",
        description: "Refreshing yogurt drink",
        price: "$3.99",
        image:
          "https://images.unsplash.com/photo-1544252890-43befb77ab0e?w=400",
      },
      {
        name: "Soft Drinks",
        description: "Coca-Cola, Sprite, Fanta",
        price: "$2.99",
        image:
          "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400",
      },
      {
        name: "Fresh Juices",
        description: "Orange, apple, or pomegranate",
        price: "$4.99",
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
      },
    ],
  },
];

export function MenuSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
          Our Menu
        </h2>

        {menuCategories.map((category) => (
          <div key={category.title} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-semibold text-center mb-8">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item) => (
                <MenuCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
