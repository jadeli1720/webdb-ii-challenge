
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 'WAUBGCFL0DA017997', make:'Audi', model: 'S4', milage:26011, transType: '6-Speed Manuel', titleStatus:''},
        {vin: 'WMWSS7C53GWS45186', make:'Mini', model: 'Paceman', milage:19201, transType: '6-Speed Manuel', titleStatus:'clear'},
        {vin: 'WBA3B3C50EJ400641', make:'BMW', model: '328i', milage:63235, transType: '6-Speed Manuel', titleStatus:'clear'},
        {vin: 'JM3TB2CA7D0411755', make:'Mazda', model: 'CX-9', milage:57010, transType: '6-Speed Automatic', titleStatus:'clear'},
        {vin: '5N1AL0MM8EL549388', make:'Infiniti', model: 'QX60', milage:36226, transType: '7-Speed Automatic', titleStatus:'import'},
        {vin: '3C3CFFBR6ET200115', make:'Fiat', model: '500', milage:47580, transType: '5-Speed Manual', titleStatus:'export'},
        {vin: '4T1BK1EB0GU214911', make:'Toyota', model: 'Avalon', milage:34005, transType: '6-Speed Automatic', titleStatus:''},
        {vin: 'WBAYG6C50FD383865', make:'BMW', model: '7 series', milage:41012, transType: '8-Speed Automatic', titleStatus:'clear'},
        {vin: 'JM1BM1K78G1321317', make:'Mazda', model: 'Mazdaspeed3', milage:92023, transType: '6-Speed Manuel', titleStatus:'clear'},
        {vin: 'WDDGF8AB3EG197679', make:'Mercedes Benz ', model: 'C', milage:30126, transType: '7-Speed Automatic', titleStatus:'clear'}
      ]);
    });
};
