import './Entete.scss';

import { Avatar } from '@material-ui/core'; 

import avatarImg from '../images/avatar.png';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="utilisateur">Ariane Laferrière-Martineau <Avatar className="avatar" alt="Camille Semaan" src={avatarImg} /></div>
    </header>
  );
}