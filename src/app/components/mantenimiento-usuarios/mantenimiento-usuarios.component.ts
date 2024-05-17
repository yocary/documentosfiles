import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mantenimiento-usuarios',
  templateUrl: './mantenimiento-usuarios.component.html',
  styleUrls: ['./mantenimiento-usuarios.component.scss']
})
export class MantenimientoUsuariosComponent {
  showAddEmployeeForm: boolean = false;
  showSolicitudesList: boolean = false;

  employee = {
    fullName: '',
    dpi: '',
    area: '',
    shift: '',
    status: 'active'
  };

  solicitudes = [
    { tipoSolicitud: 'Vacaciones', adminAprobo: 'Admin1', usuario: 'Usuario1', fecha: '01/04/2024', justificacion: 'Vacaciones', opciones: '' },
    { tipoSolicitud: 'Licencia de cumpleaños', adminAprobo: 'Admin2', usuario: 'Usuario2', fecha: '15/05/2024', justificacion: 'Cumpleaños', opciones: '' },
    // Más solicitudes aquí
  ];

  displayedColumns: string[] = ['tipoSolicitud', 'adminAprobo', 'usuario', 'fecha', 'justificacion', 'opciones'];

  constructor(private router: Router) { }

  onAddEmployee() {
    // Lógica para agregar empleado
    if (this.employee.fullName && this.employee.dpi && this.employee.area) {
      console.log('Empleado agregado:', this.employee);
      alert('Empleado agregado correctamente');
      this.resetForm();
      this.showAddEmployeeForm = false; // Ocultar el formulario después de agregar
    } else {
      alert('Por favor complete todos los campos requeridos');
    }
  }

  onSaveEmployee() {
    Swal.fire({
      title: '¿Está seguro de agregar el empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.showAddEmployeeForm = false;
        this.showSolicitudesList = false;
        Swal.fire(
          'Guardado',
          'El empleado ha sido guardado.',
          'success'
        );
      } else {
        console.log('Operación cancelada');
      }
    });
  }

  onBack() {
    this.showAddEmployeeForm = false;
    this.showSolicitudesList = false;
  }

  onBackToLogin() {
    this.router.navigate(['/']);
  }

  resetForm() {
    this.employee = {
      fullName: '',
      dpi: '',
      area: '',
      shift: '',
      status: 'active'
    };
  }

  showSolicitudes() {
    this.showSolicitudesList = true;
  }

  aprobarSolicitud(solicitud: any) {

  }

  rechazarSolicitud(solicitud: any) {
    
  }
}
