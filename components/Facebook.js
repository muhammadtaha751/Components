import FbImageLibrary from 'react-fb-image-grid'


function Facebook(props) {

    const { tittle, userName, profilePic, date } = props
    return (
        <div className="data" >
            <div className="main" >

                <div className="profile"  >
                    <img
                        className="avatar"
                        src="https://tse3.mm.bing.net/th?id=OIP.d2oEtLC1jVCmUhPpZY_q0AHaFj&pid=Api&P=0&h=220"
                        alt="Post"
                        width={60}
                        height={60}
                    />
                    <p>{userName}</p>
                    <p className="date" >{date}</p>
                </div>
                <div className="post" >
                    <p> {tittle}</p>
                    {/* <p>{date}</p> */}
                </div>
                <div className="images-post" >
                
                <FbImageLibrary images={profilePic}/>

                    {/* <img  src={profilePic} /> */}
                </div>
                <div>
                👍 Like
            </div>
            </div>
            
        </div>

    )
}

export default Facebook