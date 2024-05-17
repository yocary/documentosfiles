import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    { tipoSolicitud: 'Vacaciones', adminAprobo: 'Admin1', usuario: 'Usuario1', fecha: '2024-05-01', justificacion: 'Vacaciones anuales', opciones: '' },
    { tipoSolicitud: 'Permiso Personal', adminAprobo: 'Admin2', usuario: 'Usuario2', fecha: '2024-05-02', justificacion: 'Permiso por asuntos personales', opciones: '' },
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
