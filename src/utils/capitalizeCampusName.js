const capitalizeCampusName = name => (
    name.length <= 4 ? name.toUpperCase() : name[0].toUpperCase() + name.slice(1)
);

export default capitalizeCampusName;