export default class ComponentLifeCycle extends Component {
   shouldComponentUpdate()
   {
    return true
   }
   getSnapBeforeUpdate(prevProps,preState)
   {
    document.grtElementById("id1").innerHTML = "Previous value" +prevState.favColor;
   }
   render(){
    return (
        <div>
            <h1>My favourite color is {this.state.favColor}</h1>
            <p id="id1"></p>
        </div>
    )
   }

}