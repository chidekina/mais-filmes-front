const MovieLine = ({ title, details }) => {
    return (
                <p><strong>{title}</strong> {details.overview}</p>
      );
}
 
export default MovieLine;