function DisplayName(props)
{
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
export default function List(){
    const stnam=["subha","sri","sanju","hari"]
    const st=stnam.map((stu)=><DisplayName nam={stu}></DisplayName>)
    return(
        <div>
            {st}
        </div>
    )
}
export default DisplayName;