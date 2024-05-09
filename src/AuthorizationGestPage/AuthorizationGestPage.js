import "./AuthorizationGestPage.css";
import { Link } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function SimpleAutorizationForm() {
  return (
    <Card color="transparent" shadow={false}>
      <section className="allCard">
        <div className="justForPadding">
          <div className="rowRegistr">
            <Typography className="mt-1" variant="h4">
              Авторизация
            </Typography>
            <Typography className="mt-2 font-normal">
              Добро пожаловать авторизуйтесь пожалуйста
            </Typography>
          </div>

          <form className="mt-8 bg-white">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" className="-mb-3">
                Ваш Логин
              </Typography>
              <Input
                size="lg"
                placeholder="Ваше Логин"
                className="inputRow"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" className="-mb-3">
                Пароль
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className="inputRow"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  className="flex items-center font-normal"
                >
                  Я согласен с
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;условиями использования
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Link to="/">
              {" "}
              <Button className="mt-6" fullWidth>
                Авторизоваться
              </Button>{" "}
            </Link>

            <Typography className="mt-4 text-center font-normal">
              Уже есть аккаунт?{" "}
              <Link
                to="/Registration"
                className="font-medium text-gray-900 touch"
              >
                Регистрация
              </Link>
            </Typography>
          </form>
        </div>
      </section>
    </Card>
  );
}
