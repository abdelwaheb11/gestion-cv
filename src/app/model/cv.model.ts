export class cvModel {
    info!:info;
   langues!:langue[];
   formations!:formation[];
   experiences!:experience[];
   competances!:langue[];
}
export class cv{
    id!:number;
    info!:info;
}

export class  info {
    nom! : string;
    pre!: string;
    spe!:specialite;
    mail!:string;
    adr!:string;
    tele!:string;
    desc!:string;
}

export class specialite{
    id!:number;
    titre!:string;
}

export class compte{
    nom!:string;
    mail!:string;
    mot!:string;
    role!:string;
}

export class langue{
    id!:number;
    labelle!:string;
    niveau!:number;
    cvid:number=0;
}

export class formation{
    id!:number;
    titre!:string;
    eta!:string;
    date_d!:string;
    date_f!:string;
    cvid!:number;
}

export class experience{
    id!:number;
    post!:string;
    eta!:string;
    date_d!:string;
    date_f!:string;
    desc!:string;
    cvid!:number;
}
