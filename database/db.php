drop database if exists db;
create database db;
use db;

create table rooli (
    id int primary key auto_increment,
    nimike varchar(25) not null
);

create table tyontekija (
    id int primary key auto_increment,
    etunimi varchar(25) not null,
    sukunimi varchar(25) not null,
    puhnro varchar(25) not null,
    sposti varchar(25) not null,
    osoite varchar(50) not null,
    postinro char(5) not null,
    postitmp varchar(25) not null,
    tunnus varchar(25) not null,
    salasana varchar(25) not null,
    rooli_id int not null,
    index (rooli_id),
    foreign key (rooli_id) references rooli(id)
    on delete restrict
);

create table asiakas (
    id int primary key auto_increment,
    etunimi varchar(25) not null,
    sukunimi varchar(25) not null,
    puhnro varchar(25) not null,
    sposti varchar(25) not null,
    osoite varchar(50) not null,
    postinro char(5) not null,
    postitmp varchar(25) not null,
    tallennus timestamp default current_timestamp,
    tyontekija_id int not null,
    index (tyontekija_id),
    foreign key (tyontekija_id) references tyontekija(id)    
    on delete restrict
);

create table tilaus (
    id int primary key auto_increment,
    pvm timestamp default current_timestamp,
    asiakas_id int not null,
    tyontekija_id int not null,
    index (asiakas_id),
    foreign key (asiakas_id) references asiakas(id),
    index (tyontekija_id),
    foreign key (tyontekija_id) references tyontekija(id)
    on delete restrict
);

create table tuote (
    id int primary key auto_increment,
    nimi varchar(25) not null,
    hinta int not null
);

create table tilausrivi (
    id int primary key auto_increment,
    tuote_id int not null,
    index (tuote_id),
    foreign key (tuote_id) references tuote(id)
    on delete restrict
);

create table auto (
    id int primary key auto_increment,
    reknro varchar(25) not null,
    merkki varchar(25) not null,
    malli varchar(25) not null,
    rengaskoko varchar(25) not null,
    pultti varchar(25) not null
);

create table toimipiste (
    id int primary key auto_increment,
    nimi varchar(25) not null,
    puhnro varchar(25) not null,
    sposti varchar(25) not null,
    osoite varchar(25) not null,
    postinro char(5) not null,
    postitmp varchar(25) not null,
    logo varchar(25)
);

create table varasto (
    id int primary key auto_increment,
    nimi varchar(25),
    toimipiste_id int not null,
    index (toimipiste_id),
    foreign key (toimipiste_id) references toimipiste(id)
    on delete restrict
);

create table hylly (
    id int primary key auto_increment,
    varasto_id int not null,
    index (varasto_id),
    foreign key (varasto_id) references varasto(id)
    on delete restrict
);

create table paikka (
    id int primary key auto_increment,
    hylly_id int not null,
    index (hylly_id),
    foreign key (hylly_id) references hylly(id)
    on delete restrict
);

create table renkaat (
    id int primary key auto_increment,
    asiakas_id int not null,
    auto_id int not null,
    paikka_id int not null,
    tyontekija_id int not null,
    index (asiakas_id),
    foreign key (asiakas_id) references asiakas(id),
    index (auto_id),
    foreign key (auto_id) references auto(id),
    index (paikka_id),
    foreign key (paikka_id) references paikka(id),
    merkki varchar(25) not null,
    malli varchar(25) not null,
    koko varchar(25) not null,
    tyyppi varchar(25) not null,
    kapselit varchar(25) not null,
    urave varchar(25) not null,
    uraoe varchar(25) not null,
    uravt varchar(25) not null,
    uraot varchar(25) not null,
    teksti text,
    vanteet varchar(25) not null,
    kasittelyaika timestamp default current_timestamp,
    lisatiedot text,
    index (tyontekija_id),
    foreign key (tyontekija_id) references tyontekija(id)
    on delete restrict
);