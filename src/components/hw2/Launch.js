import './style.css'

export default function Launch(props) {

    const {launch} = props;

    return (
        <div className='launch'>
            <h4>{launch.mission_name}</h4>
            <h5>{launch.launch_year}</h5>
            <img src={launch.links.mission_patch_small} alt={launch.mission_name}/>
        </div>
    );
}


