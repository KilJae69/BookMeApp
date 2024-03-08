const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const styles = {
  desktop: "hidden lg:flex lg:gap-x-12",
  mobile: "space-y-2 py-6",
};

function NavList({ type }) {
  return (
    <div className={styles[type]}>
      {navigation.map((item) => (
        
          <a key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {item.name}
          </a>
       
      ))}
    </div>
  );
}

export default NavList;
