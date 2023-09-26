import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration)

export const formatDate = (tripDate, time) => {
    const date = dayjs(tripDate).format("YYYY-MM-DD");
    const addedDate = new Date(`${date}T${time}`).toISOString();
    return dayjs(addedDate).format("hh:mmA");
}

export const getTripDuration = (tripDate, departure, arrival) => {
    const date = dayjs(tripDate).format("YYYY-MM-DD");

    const departureHours = new Date(`${date}T${departure}`).getHours();
    const arrivalHours = new Date(`${date}T${arrival}`).getHours();

    const departureMinutes = new Date(`${date}T${departure}`).getMinutes();
    const arrivalMinutes = new Date(`${date}T${arrival}`).getMinutes();

    const depHours = dayjs.duration(departureHours, 'hour');
    const aHours = dayjs.duration(arrivalHours, 'hour');

    const depMinutes = dayjs.duration(departureMinutes, 'minute');
    const aMinutes = dayjs.duration(arrivalMinutes, 'minute');

    const diffHours = aHours.subtract(depHours).hours();
    const diffMinutes = aMinutes.subtract(depMinutes).format("mm");
    // const diff = dayjs.duration(a.diff(d)).as('hours');
    return diffHours +"h"+diffMinutes+"m";
}