import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <>
      {/* Material UI AppBar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Feminora
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
<Box
  sx={{
    py: { xs: 5, md: 8 },
    backgroundImage: 'url("https://i.pinimg.com/736x/f3/aa/8b/f3aa8b5215be7bc70ba00cd69de11d7e.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
  }}
>
  <Container maxWidth="md" sx={{ textAlign: 'center', px: 2 }}>
    <Typography
      variant="h3"
      gutterBottom
      sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
    >
      Welcome to Feminora
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        fontStyle: 'italic',
        fontSize: { xs: '1rem', md: '1.25rem' },
        color: '#f0e6ff',
      }}
    >
      Unveiling the beauty of every woman with Feminora
    </Typography>
    <Typography
      variant="body1"
      gutterBottom
      sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
    >
      Discover beautiful ornaments for every occasion.
    </Typography>
    <Button variant="contained" color="secondary" size="large">
      Shop Now
    </Button>
  </Container>
</Box>

      {/* Bootstrap Card Grid */}
      <div className="container my-5">
        <div className="row">
          {/* Necklace Card */}
          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://darlagold.in/uploads/jewellery/1710241137_0f80ad2e2b2b6961361b.jpg" 
                className="card-img-top" 
                alt="Necklace"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Necklaces</h5>
                <p className="card-text">Explore our exquisite collection of necklaces.</p>
                <a href="#" className="btn btn-primary">View More</a>
              </div>
            </div>
          </div>

          {/* Earrings Card */}
          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://i.pinimg.com/originals/8d/99/ec/8d99ecc4f5dcc669f30230eb6f7000bb.jpg" 
                className="card-img-top" 
                alt="Earrings"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Earrings</h5>
                <p className="card-text">Explore our elegant collection of earrings.</p>
                <a href="#" className="btn btn-primary">View More</a>
              </div>
            </div>
          </div>

          {/* Bangles Card */}
          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://static.wixstatic.com/media/302d11_eb33da90cd344f558af43b9600e5ad78~mv2.jpg/v1/fill/w_564,h_564,al_c,q_80,enc_auto/302d11_eb33da90cd344f558af43b9600e5ad78~mv2.jpg" 
                className="card-img-top" 
                alt="Bangles"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Bangles</h5>
                <p className="card-text">Explore our stylish collection of bracelets.</p>
                <a href="#" className="btn btn-primary">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

         {/* Contact Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form className="p-3 p-md-4 shadow rounded bg-light">
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter your name" 
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea 
                  className="form-control" 
                  rows="4" 
                  placeholder="Write your message">
                </textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-100 py-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Box sx={{ bgcolor: '#222', color: '#fff', py: 3, textAlign: 'center' }}>
        <Container>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
            © {new Date().getFullYear()} Feminora | Unveiling the beauty of every woman ✨
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default App;
