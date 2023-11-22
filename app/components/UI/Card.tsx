export default function Card(props: any) {
  const classes = "container card " + (props.className ? props.className : "");  
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}
