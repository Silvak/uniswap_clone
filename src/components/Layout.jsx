function Layout(props) {
  return (
    <div className="pt-[120px] sm:pt-[120px] md:pt-[120px] lg:pt-[140px] xl:pt-[150px] pb-20 px-3 max-w-[1200px]">
      {props.children}
    </div>
  );
}

export default Layout;
