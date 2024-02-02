import Header from "./Header";
import { useLayoutStyles } from "./Styles/LayoutStyles";

export default function Layout({ children }: any) {
  const classes = useLayoutStyles();
  return (
    <div>
      <Header />
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
