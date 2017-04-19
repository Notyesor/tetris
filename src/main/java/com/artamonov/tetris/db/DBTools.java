package com.artamonov.tetris.db;

import com.artamonov.tetris.dto.Player;
import com.artamonov.tetris.dto.Score;
import org.postgresql.Driver;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DBTools {
    public static Connection getPostgresConnection() {
        try {
            DriverManager.registerDriver((Driver)
                    Class.forName("org.postgresql.Driver").newInstance());
            StringBuilder url = new StringBuilder();
            url.
                    append("jdbc:postgresql://").  //db type
                    append("localhost:").          //host name
                    append("5432/").               //port
                    append("tetris?").             //db name
                    append("user=tetris&").      //login
                    append("password=tetris");     //password
            System.out.println("URL: " + url + "\n");
            Connection connection = DriverManager.getConnection(url.toString());
            System.out.println("Connection created!!!");
            return connection;
        } catch (SQLException | InstantiationException | IllegalAccessException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static boolean addPlayer(String login, String password) {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("INSERT INTO player (login, password) VALUES (?, ?)");
            statement.setString(1, login);
            statement.setString(2, password);
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean addPlayer(Player player) {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("INSERT INTO player (login, password) VALUES (?, ?)");
            statement.setString(1, player.getLogin());
            statement.setString(2, player.getPassword());
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean updatePlayer(Player player) {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("UPDATE player SET password = ? WHERE login = ?");
            statement.setString(1, player.getPassword());
            statement.setString(2, player.getLogin());
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean updatePlayer(String login, String password) {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("UPDATE player SET password = ? WHERE login = ?");
            statement.setString(1, password);
            statement.setString(2, login);
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static Player getPlayer(String login) {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM player WHERE login = ?");
            statement.setString(1, login);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()){
                return new Player(resultSet.getString("login"), resultSet.getString("password"));
            } else return null;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static boolean addScore(Player player, int score) {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("INSERT INTO score (login, value) VALUES (?, ?)");
            statement.setString(1, player.getLogin());
            statement.setInt(2, score);
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean updateScore(Player player, int score) {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("UPDATE score SET value = ? WHERE login = ?");
            statement.setInt(1, score);
            statement.setString(2, player.getLogin());
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean addScore(String login, int score) {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("INSERT INTO score (login, value) VALUES (?, ?)");
            statement.setString(1, login);
            statement.setInt(2, score);
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean updateScore(String login, int score) {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("UPDATE score SET value = ? WHERE login = ?");
            statement.setInt(1, score);
            statement.setString(2, login);
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static Score getScore(String login) {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM score WHERE login = ?");
            statement.setString(1, login);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                return new Score(resultSet.getString("login"), resultSet.getInt("value"));
            } else return null;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static List<Score> getScores() {
        try(Connection connection = getPostgresConnection()) {
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM score");
            ResultSet resultSet = statement.executeQuery();
            List<Score> scores = new ArrayList<>();
            while (resultSet.next()) {
                scores.add(new Score(resultSet.getString("login"), resultSet.getInt("value")));
            }
            return scores;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
}
