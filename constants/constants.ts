import { useTranslation } from "next-i18next";
export const HOME = "/";

export enum ROUTE_PATHS {
  MOTOR = "/motor",
  CAR = "/details",
  HABITATION = "/habitation",
  SIMULATION = "/simulation",
  CARDETAILS = "/car/YourCarDetails",
  YOURCAR = "/car/YourCar",
  DASHBOARD = "/dashboard",
  Cascadingdropdown ='/dropdown'
  
}

export const Vehicle_Details = {
  Fuels: [
    // { label: 'Sélectionnez', value: 'Sélectionnez' },
    { label: "Essence", value: "Essence" },
    { label: "Diesel", value: "Diesel" },
    { label: "LPG", value: "LPG" },
    {
      label: "HYBRIDE (Essence + electrique)",
      value: "HYBRIDE (Essence + electrique)",
    },
    {
      label: "HYBRIDE (Diesel + electrique)",
      value: "HYBRIDE (Diesel + electrique)",
    },
    { label: "100% Electrique", value: "100% Electrique" },
  ],
  Years: [
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
    { label: "2018", value: "2018" },
    { label: "2017", value: "2017" },
    { label: "2016", value: "2016" },
    { label: "2015", value: "2015" },
    { label: "2014", value: "2014" },
    { label: "2013", value: "2013" },
    { label: "2012", value: "2012" },
    { label: "2011", value: "2011" },
    { label: "2010", value: "2010" },
    { label: "2009", value: "2009" },
    { label: "2008", value: "2008" },
    { label: "2007", value: "2007" },
    { label: "2006", value: "2006" },
    { label: "2005", value: "2005" },
    { label: "2004", value: "2004" },
    { label: "2003", value: "2003" },
    { label: "2002", value: "2002" },
    { label: "2001", value: "2001" },
    { label: "2000", value: "2000" },
    { label: "1999", value: "1999" },
    { label: "1998", value: "1998" },
    { label: "1997", value: "1997" },
    { label: "1996", value: "1996" },
    { label: "1995", value: "1995" },
    { label: "1994", value: "1994" },
    { label: "1993", value: "1993" },
    { label: "1992", value: "1992" },
    { label: "1991", value: "1991" },
    { label: "1990", value: "1990" },
    { label: "1989", value: "1989" },
    { label: "1987", value: "1987" },
    { label: "1986", value: "1986" },
    { label: "1985", value: "1985" },
    { label: "1984", value: "1984" },
    { label: "1983", value: "1983" },
  ],
};
