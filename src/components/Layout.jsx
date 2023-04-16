function Layout(props) {
  return (
    <div className="pt-[120px] sm:pt-[16%] pb-20 px-3 max-w-[1200px]">
      {props.children}
    </div>
  );
}

export default Layout;
