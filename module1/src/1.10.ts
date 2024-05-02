{
    //  Union Type (|)

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper' | 'reactDeveloper';
    type BackendDeveloper = 'fakibazDeveloper' | 'midLevelDeveloper' | 'nodejsDeveloper';

    // type union with another two types
    type FullStackDeveloper = FrontendDeveloper | BackendDeveloper;

    const newDeveloper: FullStackDeveloper = 'juniorDeveloper';

    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        age: number;
        bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
    }

    const newUser: User = {
        name: 'Mezbaul',
        email: 'mezbaul@me.com',
        gender: 'male',
        age: 21,
        bloodGroup: 'A+'
    }

    // Intersection Type (&)

    type ReactDeveloper = {
        skills: string[];
        designation1: 'ReactJS Developer';
    }

    type NodejsDeveloper = {
        skills: string[];
        designation2: 'NodeJS Developer';
    }

    // type intersection with another two types
    type MernStackDeveloper = ReactDeveloper & NodejsDeveloper;

    const mernStackDeveloper: MernStackDeveloper = {
        skills: ['ReactJS', 'NodeJS'],
        designation1: 'ReactJS Developer',
        designation2: 'NodeJS Developer'
    }
}