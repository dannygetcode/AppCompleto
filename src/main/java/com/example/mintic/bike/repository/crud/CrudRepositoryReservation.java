package com.example.mintic.bike.repository.crud;
import org.springframework.data.repository.CrudRepository;
import com.example.mintic.bike.model.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Date;
import java.util.List;

public interface CrudRepositoryReservation  extends CrudRepository<Reservation,Integer>{

    List<Reservation> findAllByStatus(String status);

    List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date fechaInicio, Date fechaFin);

    @Query("SELECT c.client, COUNT(c.client) from Reservation  AS c  group by c.client order by COUNT(c.client)DESC ")
    List<Object[]> reporteClientes();
}
