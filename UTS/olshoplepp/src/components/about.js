import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <h2 align="center">About</h2> <br></br>
                <table width="745" border="1" cellspacing="0" cellpadding="5" align="center">
                    <tr>
                        <td>Nama</td>
                        <td>Abdur Rozak Junaidi</td>
                        <td rowspan="10" align="center"><img src="./images/abdur.jpg"  width="210" height="270"/></td>
                    </tr>
                    <tr>
                        <td>JURUSAN</td>
                        <td>TEKNOLOGI INFORMASI</td>
                    </tr>
                    <tr>
                        <td>KELAS</td>
                        <td>3D</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>Laki Laki</td>
                    </tr>
                    <tr>
                        <td>Tempat, Tanggal Lahir</td>
                        <td>Probolinggo, 20 Juni 2001</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>Probolinggo</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>abdurrozak@gmail.com</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default About;